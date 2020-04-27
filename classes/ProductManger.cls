public with sharing class ProductManger {
    @AuraEnabled(cacheable=true)
    public static List<Product2> FindAllProduct(){
        List<Product2> productList = [SELECT Id,Name,ProductCode,Family,Description FROM Product2 Where isActive=TRUE]; 
        return productList;
    }
}
