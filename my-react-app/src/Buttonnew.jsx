

function buttonnew(){

    const handleClidc = (e) =>{
        e.target.textContent = "Ouch!!!";
    }

    let count = 0 ;
    const handleCick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else {
            console.log(`${name} stop clicking me!`);
        }

    };

    const handleClidk2 = (name) => console.log(`${name} stop touching me!!?? weirdo `);

    return(
        <button onDoubleClick={(e)=> handleClidc(e)}>Click me 👽</button>
    );
}

export default buttonnew