import { LightningElement, api, track, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities';
import getAllOpps from '@salesforce/apex/OpportunityController.getAllOpps';

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', type: 'text'},
    { label: 'Expected Revenue', fieldName: 'ExpectedRevenue', type: 'currency' },
    { label: 'Close Date', fieldName: 'CloseDate', type: 'text'},
];

export default class WiredOpportunities extends LightningElement {
    columns = COLUMNS;
    error;

    @track stage = '';

    @wire(getOpportunities, { stage: '$stage' }) 
    opportunities;

    handleProspecting() {
        this.stage = 'Prospecting';
        getOpportunities(this.stage);
    }

    handleQualification() {
        this.stage = 'Qualification';
        getOpportunities(this.stage);
    }

    handleNeedsAnalysis() {
        this.stage = 'Needs Analysis';
        getOpportunities(this.stage);
    }

    handleValueProp() {
        this.stage = 'Value Proposition';
        getOpportunities(this.stage);
    }

    handleIdDecisionMakers() {
        this.stage = 'Id. Decision Makers';
        getOpportunities(this.stage);
    }

    handlePerceptionAnalysis() {
        this.stage = 'Perception Analysis';
        getOpportunities(this.stage);
    }

    handleProposalPriceQuote() {
        this.stage = 'Proposal/Price Quote';
        getOpportunities(this.stage);
    }

    handleNegotiationReview() {
        this.stage = 'Negotiation/Review';
        getOpportunities(this.stage);
    }

    handleClosedWon() {
        this.stage = 'Closed Won';
        getOpportunities(this.stage);
    }

    handleClosedLost() {
        this.stage = 'Closed Lost';
        getOpportunities(this.stage);
    }

    handleAll() {
        this.stage = 'All';
        getOpportunities(this.stage);
    }

}