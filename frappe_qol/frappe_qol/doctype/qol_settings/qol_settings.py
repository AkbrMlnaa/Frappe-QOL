# Copyright (c) 2026, Akbar Maulana Husada and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class QOLSettings(Document):
    def on_update(self):
        frappe.clear_cache()
        frappe.msgprint("QOL Settings deprbarui. Memuat ulang Sistem...")

		
        

