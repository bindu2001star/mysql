const fs=require('fs');
const path=require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );
module.exports=class Cart{
    static addproduct(id,productprice){
        fs.readFile(p,(err,fileContent)=>{
            let cart={products:[],totalprice:0};
            if(!err){
                cart=JSON.parse(fileContent);
            }
            let updatedproduct;
            const existingproductindex=cart.products.findIndex(prod=>prod.id===id);
            const existingproduct=cart.products[existingproductindex];
            if(existingproduct){
                updatedproduct={...existingproduct};
                updatedproduct.qty=updatedproduct.qty+1;
                cart.products=[...cart.products];
                cart.products[existingproductindex]=updatedproduct;
            }else{
                updatedproduct={id:id,qty:1};
                cart.products=[...cart.products,updatedproduct];

            }
            cart.totalprice=cart.totalprice+  +productprice;
            fs.writeFile(p,JSON.stringify(cart),err=>{
                console.log(err);
            })
        })

    }
}