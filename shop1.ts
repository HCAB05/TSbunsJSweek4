function addNumbers(): void {

    const units: NodeListOf<HTMLElement> = document.getElementsByName("UnitPrice") as NodeListOf<HTMLElement>;
    const quantities: NodeListOf<HTMLElement> = document.getElementsByName("Quantity") as NodeListOf<HTMLElement>;
    
    console.log(`Units: ${units.length}, Quantities: ${quantities.length}`);
    const output1 = document.getElementById("Payment") as HTMLInputElement;
    const output2 = document.getElementById("discounted") as HTMLInputElement;

    let sum: number = 0;

    for (let i = 0; i < units.length; i++){
        const UnitPrice = parseFloat(units[i].textContent || "0");
        const Quantity = parseFloat(quantities[i].textContent || "0");
        
        sum += UnitPrice * Quantity;
        console.log(`Unit Price: ${UnitPrice}, Quantity: ${Quantity}, Sum: ${sum}`);


            
    
    }

    output1.innerText = sum.toString();
    output2.innerText = (sum * 0.75).toString();
    console.log( sum);
}

document.getElementById("Calculate-total")?.addEventListener("click", addNumbers);