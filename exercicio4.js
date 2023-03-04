const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const valorTotal = Object.values(faturamentoPorEstado).reduce((acc, curr) => acc + curr);

for (let estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / valorTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}  