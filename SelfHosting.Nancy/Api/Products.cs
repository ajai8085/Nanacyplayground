using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Nancy;
using Nancy.Responses;

namespace SelfHosting.Nancy.Api
{
    public class Products:NancyModule
    {
        public Products():base(@"api/products")
        {
            Get["/"] = param => new JsonResponse(GetAll(), new DefaultJsonSerializer());

            Get["/{productId}"]= param=> new JsonResponse(GetAll().FirstOrDefault(i=> i.ProductId== param.ProductId), new DefaultJsonSerializer());
        }

        private IEnumerable<Product> GetAll()
        {
            yield return new Product
            {
                ProductId=1,
                Cost=12.33m,
                ImageUrl= @"http://www.clipartpictures.net/pictures/Fruits%20and%20Vegetables/g0800752.png",
                Price=14.89m,
                ProductName="Strawberry",
                Tags=new List<string> { "Fruits", "expensive","rare"}

            };


            yield return new Product
            {
                ProductId = 2,
                Cost = 12.33m,
                ImageUrl = @"http://www.clipartpictures.net/pictures/Fruits%20and%20Vegetables/g0800753.png",
                Price = 14.89m,
                ProductName = "Star fruit",
                Tags = new List<string> { "Fruits", "expensive", "rare" }

            };


            yield return new Product
            {
                ProductId = 3,
                Cost = 12.33m,
                ImageUrl = @"http://www.clipartpictures.net/pictures/Fruits%20and%20Vegetables/g0800755.png",
                Price = 14.89m,
                ProductName = "Raspberry",
                Tags = new List<string> { "Fruits", "expensive", "rare" }

            };



        } 
    }

    

    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public decimal Cost { get; set; }
        public string ImageUrl { get; set; }
        public IEnumerable<string> Tags { get; set; }
    }
}
