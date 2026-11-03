function addNumbers(): void {

    const units: NodeListOf<HTMLElement> = document.getElementsByName("UnitPrice") as NodeListOf<HTMLElement>;
    const quantities: NodeListOf<HTMLElement> = document.getElementsByName("Quantity") as NodeListOf<HTMLElement>;
    
    const output1 = document.getElementById("Payment") as HTMLInputElement;
    const output2 = document.getElementById("discounted") as HTMLInputElement;

    for (let i = 0; 1 < units.length; i++){
        const UnitPrice = parseFloat(units[i].textContent || "0");
        const Quantity = parseFloat(quantities[i].textContent || "0");
        
        let sum: number = UnitPrice * Quantity;

        output1.value = sum.toString();
        output2.value = (sum * 0.75).toString();
            
    
    }

}
document.getElementById("Calculate-discount")?.addEventListener("click", addNumbers);