// const settings = frappe.boot.ui_settings || {};
//     console.log(settings.fluid_layout);
// if (settings.fluid_layout) {
//     document.body.classList.add('qol-fluid-layout');
// } else {
//     document.body.classList.remove('qol-fluid-layout');
// }

const settings = frappe.boot.ui_settings || {};

let qolStyle = document.getElementById('qol-fluid-style');
if (!qolStyle) {
    qolStyle = document.createElement('style');
    qolStyle.id = 'qol-fluid-style';
    document.head.appendChild(qolStyle);
}


if (settings.fluid_layout === 1) {
    document.body.classList.add('qol-fluid-layout');
    
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
    document.body.classList.remove('qol-fluid-layout');
    qolStyle.innerHTML = '';
}

