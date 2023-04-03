var sayur = [];

let no = parseInt(prompt('Masukan Panjang(Lenght)!'));

for (let i=0; i<no; i++) {
    sayur.push(prompt('Nama Sayur'))
}

document.writeln(sayur.join(', '));