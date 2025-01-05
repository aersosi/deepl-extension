// Button automatisch nach dem Laden der Seite klicken
window.addEventListener("load", () => {
    console.log("Page loaded. Starting interval to check for buttons...");

    // Interval to check for the first button
    const intervalId = setInterval(() => {
        const languageSelectBtn = document.querySelector('[data-testid="translator-source-lang-btn"]');
        if (languageSelectBtn) {
            languageSelectBtn.click();

            const langAutoInterval = setInterval(() => {
                const langAutoBtn = document.querySelector('[data-testid="translator-lang-option-auto"]');
                if (langAutoBtn) {
                    langAutoBtn.click();
                    clearInterval(langAutoInterval);
                }
            }, 500);

            clearInterval(intervalId);
        }
    }, 500);
});
