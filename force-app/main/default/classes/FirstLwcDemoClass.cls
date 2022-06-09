public with sharing class FirstLwcDemoClass {
    public FirstLwcDemoClass() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        try {
            return [select id,name from Contact limit 5 ];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<Account> getAccountData(){
        try {
            return [Select id,Name,Industry,Rating,Website,AnnualRevenue from Account limit 3];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
