import frappe

def boot_session(bootinfo):
    ui_settings = frappe.get_doc("QOL Settings")

    bootinfo.ui_settings = {
        "autoclose_sidebar_workspaces": ui_settings.get("autoclose_sidebar_workspaces", 0),
        "autoclose_sidebar_list": ui_settings.get("autoclose_sidebar_list", 0),
        "auto_uncheck_private_upload": ui_settings.get("auto_uncheck_private_upload", 0),
        "fluid_layout": ui_settings.get("fluid_layout", 0)
    }