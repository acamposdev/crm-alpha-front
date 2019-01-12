export class Case {
    constructor(
        public ref: string,
        public opendate: Date,
        public customerId: string,
        public finalizationdate?: Date,
        public lastmodificationdate?: Date,
        public id?: string,
        public comments?: boolean
    ) {
    }
}
