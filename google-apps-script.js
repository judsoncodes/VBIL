/**
 * =============================================================================
 * VEERAMANI BISCUIT INDUSTRIES PVT. LTD. (ROSE®)
 * GOOGLE APPS SCRIPT LEAD & ORDER TRACKER (Code.gs)
 * =============================================================================
 * Automatically receives POST requests from /distributors and /order-request.
 * Appends EACH ordered product SKU line item as its OWN INDIVIDUAL ROW (one by one)
 * into "Bulk Order Requests" tab for effortless sorting, filtering & inventory tracking!
 * =============================================================================
 */

function doPost(e) {
  try {
    var lock = LockService.getScriptLock();
    lock.tryLock(10000); // 10s concurrency lock

    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var contents = e.postData.contents;
    var data = JSON.parse(contents);

    var timestamp = new Date();

    // ROUTE 1: DISTRIBUTOR APPLICATION FORM SUBMISSION
    if (data.formType === "distributor_application" || (data.firmName && data.storageCapacity)) {
      var distSheet = doc.getSheetByName("Distributor Applications");
      if (!distSheet) {
        distSheet = doc.insertSheet("Distributor Applications");
        distSheet.appendRow([
          "Timestamp", "Firm Name", "Contact Person", "Phone", "Email", 
          "Target State", "Target District", "FMCG Experience", "Storage Capacity", "Notes"
        ]);
        distSheet.getRange("1:1").setFontWeight("bold").setBackground("#F50108").setFontColor("#FFFFFF");
      }

      distSheet.appendRow([
        timestamp,
        data.firmName || "",
        data.contactName || "",
        data.phone || "",
        data.email || "",
        data.state || "",
        data.district || "",
        data.experience || "",
        data.storageCapacity || "",
        data.notes || ""
      ]);
    }

    // ROUTE 2: B2B BULK ORDER REQUEST SUBMISSION (ONE ROW PER SKU ITEM)
    if (data.formType === "bulk_order_request" || data.totalCasesRequested !== undefined) {
      var orderSheet = doc.getSheetByName("Bulk Order Requests");
      if (!orderSheet) {
        orderSheet = doc.insertSheet("Bulk Order Requests");
        orderSheet.appendRow([
          "Timestamp", "Firm Name", "Contact Person", "Phone", "Email", 
          "GST Number", "Delivery District", "Godown Address", 
          "Product Category", "Product Name / SKU", "Pack Size Variant", "Cases Requested", "Special Instructions"
        ]);
        orderSheet.getRange("1:1").setFontWeight("bold").setBackground("#9E1117").setFontColor("#FFFFFF");
      }

      var firmDetails = data.firmDetails || data;
      var firmName = firmDetails.firmName || data["Firm Name"] || "";
      var contactName = firmDetails.contactName || data["Contact Person"] || "";
      var phone = firmDetails.phone || data["Phone"] || "";
      var email = firmDetails.email || data["Email"] || "";
      var gstNumber = firmDetails.gstNumber || data["GST Number"] || "Not Provided";
      var deliveryDistrict = firmDetails.deliveryDistrict || data["Delivery City / District"] || "";
      var address = firmDetails.address || data["Delivery Address"] || "";
      var specialInstructions = firmDetails.specialInstructions || data["Special Instructions"] || "";

      // Append EACH ordered product SKU line item as its own row (one by one)!
      if (Array.isArray(data.orderItems) && data.orderItems.length > 0) {
        data.orderItems.forEach(function(item) {
          orderSheet.appendRow([
            timestamp,
            firmName,
            contactName,
            phone,
            email,
            gstNumber,
            deliveryDistrict,
            address,
            item.category || "Bakery SKU",
            item.productName || item.productId || "",
            item.variant || "Standard Pack",
            item.casesRequested + " Cases",
            specialInstructions
          ]);
        });
      } else {
        // Fallback for flat string payloads
        orderSheet.appendRow([
          timestamp, firmName, contactName, phone, email, gstNumber, deliveryDistrict, address,
          "Bakery SKU", "Itemized Order List", "Standard Pack", (data.totalCasesRequested || data["Total Volume"] || "1") + " Cases", specialInstructions
        ]);
      }
    }

    lock.releaseLock();

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "Rows appended to Google Sheet successfully." }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
