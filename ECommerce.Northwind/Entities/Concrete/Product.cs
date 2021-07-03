﻿using Core.Entities;

namespace Entities.Concrete
{
    public class Product:IEntity
    {
        public int ProductId { get; set; }
        public int SupplierID { get; set; }
        public int CategoryId { get; set; }
        public short UnitsInStock { get; set; }
        public short UnitsOnOrder { get; set; }
        public short ReorderLevel { get; set; }
        public decimal UnitPrice { get; set; }
        public string ProductName { get; set; }
        public string QuantityPerUnit { get; set; }
        public bool Discontinued { get; set; }
        
    }
}
