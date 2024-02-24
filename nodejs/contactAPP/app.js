const contacts=require("./contacs.js");
const main = async()=>{
    const nama = await contacts.pertanyaan("Nama anda : ");
    const noHp = await contacts.pertanyaan("No HP anda : ");
    const email = await contacts.pertanyaan("Email anda : ");
    contacts.writeContac(nama, noHp, email);


}

main();
