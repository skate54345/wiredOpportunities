public with sharing class OpportunityController {

    public OpportunityController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(String stage){
        if(stage=='All'){
            return [
            SELECT Id, Name, ExpectedRevenue, CloseDate FROM Opportunity WITH SECURITY_ENFORCED
            ];
        }
        else{
            return [
                SELECT Id, Name, ExpectedRevenue, CloseDate FROM Opportunity WHERE StageName =: stage WITH SECURITY_ENFORCED
            ];
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getAllOpps(){
        return [
            SELECT Id, Name, ExpectedRevenue, CloseDate FROM Opportunity WITH SECURITY_ENFORCED
        ];
    }
}
