public with sharing class ContactManger {

    @AuraEnabled(cacheable=true)
    public static list<Contact> fetchAllcontacts(){
        List<Contact> conList = [SELECT Id,LastName,Phone,Email,Account.Name FROM Contact];
        return conList;

    }

    @AuraEnabled(cacheable=true)
    public static list<Account> getAllAccounts(){
        return [SELECT Id,Name From Account];
    }
}
