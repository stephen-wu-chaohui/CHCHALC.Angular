import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsItemComponent } from './news-item/news-item.component';
import { TodaySermonSectionComponent } from './today-sermon-section/today-sermon-section.component';
import { AppCommonModule } from 'src/app/app.common/app.common.module';
import { NewsSectionComponent } from './news-section/news-section.component';
import { ActivitySectionComponent } from './activity-section/activity-section.component';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { MinistrySectionComponent } from './ministry-section/ministry-section.component';
import { NguCarouselModule } from '@ngu/carousel';
import { PastorsSliderComponent } from './pastors-slider/pastors-slider.component';
import { PopularSemonSectionComponent } from './popular-semon-section/popular-semon-section.component';
import { ContactFormSectionComponent } from './contact-form-section/contact-form-section.component';
import { ContactInfoSectionComponent } from './contact-info-section/contact-info-section.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { IntroComponent } from './intro-section/intro-section.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { CellgroupsSectionComponent } from './cellgroups-section/cellgroups-section.component';
import { MinistryEditComponent } from './ministry-edit/ministry-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { EntityEditComponent } from '../app.common/entity-edit/entity-edit.component';
import { PastorEditComponent } from './pastor-edit/pastor-edit.component';
import { RouterModule } from '@angular/router';
import { StorySectionComponent } from './story-section/story-section.component';
import { StoryEditComponent } from './story-edit/story-edit.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { CellgroupEditComponent } from './cellgroup-edit/cellgroup-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
		NguCarouselModule,
		ReactiveFormsModule,
		RouterModule,
		AppCommonModule,
    ConfirmationPopoverModule.forRoot({
      focusButton: 'confirm',
		}),
  ],
  declarations: [
		BlogSectionComponent,
		BlogSidebarComponent,
		TodaySermonSectionComponent,
		NewsItemComponent,
		NewsSectionComponent,
		ActivitySectionComponent,
		QuoteSectionComponent,
		MinistrySectionComponent,
		MinistryEditComponent,
		PastorsSliderComponent,
		PastorEditComponent,
		PopularSemonSectionComponent,
		ContactFormSectionComponent,
		ContactInfoSectionComponent,
		HomeSliderComponent,
    HomeSectionComponent,
		IntroComponent,
    CellgroupsSectionComponent,
    CellgroupEditComponent,
		BlogSectionComponent,
		BlogSidebarComponent,
		ContactFormSectionComponent,
		ContactInfoSectionComponent,
    EntityEditComponent,
    StorySectionComponent,
    StoryEditComponent,
	],
	exports: [
    HomeSliderComponent,
    HomeSectionComponent,
		IntroComponent,
		BlogSectionComponent,
		BlogSidebarComponent,
		TodaySermonSectionComponent,
		NewsItemComponent,
		NewsSectionComponent,
		ActivitySectionComponent,
		QuoteSectionComponent,
		MinistrySectionComponent,
		PastorsSliderComponent,
		PastorEditComponent,
		PopularSemonSectionComponent,
		ContactFormSectionComponent,
		ContactInfoSectionComponent,
		CellgroupsSectionComponent,
    StorySectionComponent,
    StoryEditComponent,
	]
})
export class PagesCommonModule { }
