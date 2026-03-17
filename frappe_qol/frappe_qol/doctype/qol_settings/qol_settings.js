// Copyright (c) 2026, Akbar Maulana Husada and contributors
// For license information, please see license.txt

frappe.ui.form.on("QOL Settings", {
	refresh(frm) {
	},
        after_save: ()=>{
                setTimeout(() => {
                        window.location.reload()
                }, 1000);
        }
});
