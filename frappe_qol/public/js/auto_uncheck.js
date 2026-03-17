const settings = frappe.boot.ui_settings || {};

console.log(settings.auto_uncheck_private_upload);

if (settings.auto_uncheck_private_upload) {
    
    const observer = new MutationObserver(() => {
        const checkedBoxes = document.querySelectorAll('.modal-content input[type="checkbox"]:checked');
        
        checkedBoxes.forEach((checkbox) => {
            const parentLabel = checkbox.closest('label') || checkbox.parentElement;
            const teksLabel = parentLabel ? parentLabel.textContent.toLowerCase() : '';
            
            if ((teksLabel.includes('private') || teksLabel.includes('privat')) && !checkbox.dataset.autoUnchecked) {
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

