    // frappe.router.on("change", () => {

    //     const route = frappe.get_route();
    //     console.log(route)
    //     if (!route) return;

    //     if (route[0] !== "Workspaces") {
    //         $(".layout-side-section").hide();
    //         console.log("Close Sidebar di List View Nih Fix Semua");
    //     } else {
    //         $(".layout-side-section").show();
    //         console.log("Open Sidebar Nih Fix Semua");
    //     }
    // });
    frappe.router.on("change", () => {
        const route = frappe.get_route();
        if (!route) return;

        const viewType = route[0]?.toLowerCase(); 
        const settings = frappe.boot.ui_settings || {};
        let hideSidebar = false;

        if (viewType === "list" && settings.autoclose_sidebar_list) hideSidebar = true;
        else if (viewType === "workspaces" && settings.autoclose_sidebar_workspaces) hideSidebar = true;

        if (hideSidebar) {
            $(".layout-side-section").hide()
        }
        else $(".layout-side-section").show();
    });




