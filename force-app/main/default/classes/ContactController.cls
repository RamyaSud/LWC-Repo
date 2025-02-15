public with sharing class ContactController {
    
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(){
        /*List<Contact> conLst =  [Select id, FirstName, LastName, Email  from Contact ];
        system.debug(conLst);
        return conLst;*/
        throw new AuraHandledException('Forced error');
    }
    public ContactController() {

    }
}
