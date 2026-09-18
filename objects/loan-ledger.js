const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

function checkoutDevice(ledger, assetTag, borrower) {
  if (ledger.hasOwnProperty(assetTag) === false) {
    return { ledger, message: `Device with asset tag ${assetTag} not found.` };
  }
  
  if (ledger[assetTag].status === "CheckedOut") {
    return { ledger, message: `Device with asset tag ${assetTag} is already checked out.` };
  }

  const updatedLedger = JSON.parse(JSON.stringify(ledger));
  
  updatedLedger[assetTag].status = "CheckedOut";
  updatedLedger[assetTag].borrower = { name: borrower.name, email: borrower.email };

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} successfully checked out to ${borrower.name}.`
  };
}

function checkinDevice(ledger, assetTag) {
  if (ledger.hasOwnProperty(assetTag) === false) {
    return { ledger, message: `Device with asset tag ${assetTag} not found.` };
  }

  const updatedLedger = JSON.parse(JSON.stringify(ledger));
  
  updatedLedger[assetTag].status = "CheckedIn";
  updatedLedger[assetTag].borrower = { name: "", email: "" };
  updatedLedger[assetTag].dueDate = "";

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} successfully checked in.`
  };
}

function getSortableDate(dateString) {
  if (dateString === undefined) return 0;
  if (dateString === "") return 0;
  
  const parts = dateString.split('/');
  const month = parts[0].padStart(2, '0');
  const day = parts[1].padStart(2, '0');
  const year = parts[2];
  return parseInt(`${year}${month}${day}`, 10);
}

function listOverdueDevices(ledger, today) {
  const todayValue = getSortableDate(today);
  const overdueDevices = [];

  for (const tag in ledger) {
    const device = ledger[tag];
    
    if (device.status === "CheckedOut") {
      if (device.dueDate) {
        const dueDateValue = getSortableDate(device.dueDate);
        if (dueDateValue < todayValue) {
          overdueDevices.push(device);
        }
      }
    }
  }

  return overdueDevices.sort((a, b) => getSortableDate(a.dueDate) - getSortableDate(b.dueDate));
}

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}