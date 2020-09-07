Array.prototype.map2 = function(callback){
  const newArray = []
  for(let i = 0; i < this.length; i++){
    newArray.push(callback(this[i],i,this))
  }
  return newArray
}
const carrinho = [
  '{"nome": "borracha", "preco": "0.40"}',
  '{"nome": "caderno", "preco": "8.40"}',
  '{"nome": "kit de lapis", "preco": "7.90"}',
  '{"nome": "caneta", "preco": "0.80"}',
  '{"nome": "mochila", "preco": "20.70"}'
]

const novoCarrinho = carrinho.map2(function(e){
  return JSON.parse(e)
})

console.log(novoCarrinho)

const precosCarrinho = novoCarrinho.map2(function(e){
  return e.preco.replace('.',',')
})
