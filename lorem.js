let store ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla repellendus suscipit similique corporis dignissimos. Ratione asperiores iusto et quia obcaecati sunt eaque maiores! Voluptate accusantium est velit veniam repellendus! Laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nobis cupiditate iure consectetur debitis eaque quas voluptatem sunt. Nam dignissimos tempore repellendus velit, eum obcaecati nulla magni id nemo nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius, vitae consequatur quo iste asperiores consequuntur reprehenderit impedit quos. Molestiae velit delectus officiis vitae odio incidunt illo in saepe architecto?'
console.log(store.length);
console.log(store.split(' '));
pala=store.split(' ')
console.log('esto es',pala)
cont=0
search = prompt('Escriba la palabra que quieres buscar')
for(let i=0; i< pala.length; i++){
    console.log('Esta es la palabra: ' , i+1, pala[i])
    
  if(pala[i]===search){
    cont=cont+1
  }
}
console.log('La palabra et se repite: ',cont, 'veces')