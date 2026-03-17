(() => {
  // ../frappe_qol/frappe_qol/public/js/close_sidebar.js
  frappe.router.on("change", () => {
    var _a;
    const route = frappe.get_route();
    if (!route)
      return;
    const viewType = (_a = route[0]) == null ? void 0 : _a.toLowerCase();
    const settings3 = frappe.boot.ui_settings || {};
    let hideSidebar = false;
    if (viewType === "list" && settings3.autoclose_sidebar_list)
      hideSidebar = true;
    else if (viewType === "workspaces" && settings3.autoclose_sidebar_workspaces)
      hideSidebar = true;
    if (hideSidebar) {
      $(".layout-side-section").hide();
    } else
      $(".layout-side-section").show();
  });

  // ../frappe_qol/frappe_qol/public/js/auto_uncheck.js
  var settings = frappe.boot.ui_settings || {};
  console.log(settings.auto_uncheck_private_upload);
  if (settings.auto_uncheck_private_upload) {
    const observer = new MutationObserver(() => {
      const checkedBoxes = document.querySelectorAll('.modal-content input[type="checkbox"]:checked');
      checkedBoxes.forEach((checkbox) => {
        const parentLabel = checkbox.closest("label") || checkbox.parentElement;
        const teksLabel = parentLabel ? parentLabel.textContent.toLowerCase() : "";
        if ((teksLabel.includes("private") || teksLabel.includes("privat")) && !checkbox.dataset.autoUnchecked) {
          checkbox.click();
          checkbox.dataset.autoUnchecked = "true";
        }
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // ../frappe_qol/frappe_qol/public/js/width_custom_layout.js
  var settings2 = frappe.boot.ui_settings || {};
  var qolStyle = document.getElementById("qol-fluid-style");
  if (!qolStyle) {
    qolStyle = document.createElement("style");
    qolStyle.id = "qol-fluid-style";
    document.head.appendChild(qolStyle);
  }
  if (settings2.fluid_layout === 1) {
    document.body.classList.add("qol-fluid-layout");
    qolStyle.innerHTML = `
        body.qol-fluid-layout .container {
            max-width: 100% !important;
            width: 100% !important;
            padding-left: 30px !important;
            padding-right: 30px !important;
        }
        body.qol-fluid-layout .layout-main-section-wrapper, 
        body.qol-fluid-layout .layout-page {
            max-width: 100% !important;
        }
        body.qol-fluid-layout .desk-container {
            max-width: 100% !important;
        }
    `;
  } else {
    document.body.classList.remove("qol-fluid-layout");
    qolStyle.innerHTML = "";
  }
})();
//# sourceMappingURL=custom.bundle.PJ6XO7U3.js.map
