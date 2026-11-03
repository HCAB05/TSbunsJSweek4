function addNumbers(): void {

    const units: NodeListOf<HTMLElement> = document.getElementsByName("UnitPrice") as NodeListOf<HTMLElement>;
    const quantities: NodeListOf<HTMLElement> = document.getElementsByName("Quantity") as NodeListOf<HTMLElement>;
    
    console.log('Units: ${units.length}, Quantities: ${quantities.lenght}');
    const output1 = document.getElementById("Payment") as HTMLInputElement;
    const output2 = document.getElementById("discounted") as HTMLInputElement;

    for (let i = 0; i < units.length; i++){
        const UnitPrice = parseFloat(units[i].textContent || "0");
        const Quantity = parseFloat(quantities[i].textContent || "0");
        
        let sum: number = UnitPrice * Quantity;
        console.log('Unit Price: ${unitPrice}, Quantity: ${quantity}, Sum: ${sum}');

        output1.value = sum.toString();
        output2.value = (sum * 0.75).toString();
            
    
    }

}
document.getElementById("Calculate-total")?.addEventListener("click", addNumbers);