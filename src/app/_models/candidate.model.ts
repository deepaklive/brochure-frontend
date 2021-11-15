export interface CandidateModel {
    id?: number;
    id_email?: string;
    course?: string;
    name: string;
    rank: string;
    service: string;
    experience: string;
    qualification: string;
    gender: string;
    phone_no: string;
    email: string;
    linkedIn: string;
    image_url?: string;
    introduction: string;
  
    //ROLE
    hrm_role?: boolean;
    scm_role?: boolean;
    operation_role?: boolean;
    project_role?: boolean;
    security_role?: boolean;
    admin_role?: boolean;
    it_role?: boolean;
    aviation_role?: boolean;

    hospital_admin?: boolean;
    qc_qa?: boolean;
    finance?: boolean;
    education_org?: boolean;
    strategy?: boolean;
    technical_writing?: boolean;
    block_chain?: boolean;
    legal_compliance?: boolean;
  }
  