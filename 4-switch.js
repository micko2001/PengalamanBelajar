let info = prompt("Pilih makanan berikut: \n(contoh): nasi, daging, junkfood");

switch(info){

    case 'daging':
    case 'nasi':
        alert("Makanan sehat!!!");
    break;
    case 'junkfood':
        alert("Makanan tidak Sehat!!!");
    break;
    default:
        alert("pilihan makanan anda tidak tertera!!!");
    break;
}