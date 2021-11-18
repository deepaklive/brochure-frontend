import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { AwardModel } from "src/app/_models/award.model";
import { CandidateModel } from "src/app/_models/candidate.model";
import { CertificationModel } from "src/app/_models/certification.model";
import { CompetenciesModel } from "src/app/_models/competencies.model";
import { EducationModel } from "src/app/_models/education.model";
import { ExperienceModel } from "src/app/_models/experience.model";
import { JobDescriptionModel } from "src/app/_models/jd.model";
import { SkillModel } from "src/app/_models/skill.model";
import { AwardService } from "src/app/_services/award.service";
import { CertificationService } from "src/app/_services/certification.service";
import { CompetenciesService } from "src/app/_services/competencies.service";
import { EducationService } from "src/app/_services/education.service";
import { ExperienceService } from "src/app/_services/experience.service";
import { JDService } from "src/app/_services/jd.service";
import { SkillService } from "src/app/_services/skill.service";

@Component({
  selector: "app-candidate-details",
  templateUrl: "./candidate-details.component.html",
  styleUrls: ["./candidate-details.component.css"],
})
export class CandidateDetailsComponent implements OnInit, OnChanges {
  @Input() candidate!: CandidateModel;

  awards!: AwardModel[];
  competencies!: CompetenciesModel[];
  certifications!: CertificationModel[];
  education!: EducationModel[];
  skills!: SkillModel[];
  experiences!: ExperienceModel[];
  jd!: JobDescriptionModel[];

  isLoadingAwards = false;
  isLoadingCompetencies = false;
  isLoadingCertifications = false;
  isLoadingEducation = false;
  isLoadingSkills = false;
  isLoadingExperiences = false;
  isLoadingJD = false;

  constructor(
    private awardService: AwardService,
    private certificationService: CertificationService,
    private competenciesService: CompetenciesService,
    private educationService: EducationService,
    private experienceService: ExperienceService,
    private jdService: JDService,
    private skillService: SkillService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.candidate) {
      this.getDetails(this.candidate);
    }
  }

  getDetails(c: CandidateModel) {
    this.getCompetencies();
    this.getEducation();
    this.getAwards();
    this.getCertifications();
    this.getSkills();
    this.getExperience();
    this.getjd;
  }

  educationUpdated(event : string){
    if(event === 'education updated'){
      this.getEducation();
    }
  }


  getCompetencies() {
    this.isLoadingCompetencies = true;
    this.competenciesService.getAll().subscribe(
      (res) => {
        this.competencies = <CompetenciesModel[]>res;
        console.log(res);
        this.isLoadingCompetencies = false;
      },
      (error) => {
        console.log(error);
        this.isLoadingCompetencies = false;
      }
    );
  }

  getEducation() {
    this.isLoadingEducation = true;
    this.educationService.getAll().subscribe(
      (res) => {
        this.education = <EducationModel[]>res;
        console.log(res);
        this.isLoadingEducation = false;
      },
      (error) => {
        console.log(error);
        this.isLoadingEducation = false;
      }
    );
  }

  getAwards() {
    this.isLoadingAwards = true;
    this.awardService.getAll().subscribe(
      (res) => {
        this.awards = <AwardModel[]>res;
        console.log(res);
        this.isLoadingAwards = false;
      },
      (error) => {
        console.log(error);
        this.isLoadingAwards = false;
      }
    );
  }

  getCertifications() {
    this.isLoadingCertifications = true;
    this.certificationService.getAll().subscribe(
      (res) => {
        this.certifications = <CertificationModel[]>res;
        console.log(res);
        this.isLoadingCertifications = false;
      },
      (error) => {
        console.log(error);
        this.isLoadingCertifications = false;
      }
    );
  }

  getSkills() {
    this.isLoadingSkills = true;
    this.skillService.getAll().subscribe(
      (res) => {
        this.skills = <SkillModel[]>res;
        console.log(res);
        this.isLoadingSkills = false;
      },
      (error) => {
        console.log(error);
        this.isLoadingSkills = false;
      }
    );
  }

  getExperience() {
    this.isLoadingExperiences = true;
    this.experienceService.getAll().subscribe(
      (res) => {
        this.experiences = <ExperienceModel[]>res;
        console.log(res);
        this.isLoadingExperiences = false;
      },
      (error) => {
        console.log(error);
        this.isLoadingExperiences = false;
      }
    );
  }

  getjd() {
    this.isLoadingJD = true;
    this.jdService.getAll().subscribe(
      (res) => {
        this.jd = <JobDescriptionModel[]>res;
        console.log(res);
        this.isLoadingJD = false;
      },
      (error) => {
        console.log(error);
        this.isLoadingJD = false;
      }
    );
  }
}
