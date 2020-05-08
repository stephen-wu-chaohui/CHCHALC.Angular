import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { SermonComponent } from './sermon/sermon.component';
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
import { IntroComponent } from './intro/intro.component';
import { BlogComponent } from './blog/blog.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { CellgroupsSectionComponent } from './cellgroups-section/cellgroups-section.component';
import { MinistryItemComponent } from './ministry-item/ministry-item.component';
import { MinistryEditComponent } from './ministry-edit/ministry-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { EntityEditComponent } from './entity-edit/entity-edit.component';
import { PastorEditComponent } from './pastor-edit/pastor-edit.component';
import { RouterModule } from '@angular/router';
import { StorySectionComponent } from './story-section/story-section.component';
import { StoryEditComponent } from './story-edit/story-edit.component';
import { HomeComponent } from './home/home.component';
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
		BlogComponent,
		BlogSidebarComponent,
		SermonComponent,
		NewsComponent,
		NewsSectionComponent,
		ActivitySectionComponent,
		QuoteSectionComponent,
		MinistrySectionComponent,
		MinistryItemComponent,
		MinistryEditComponent,
		PastorsSliderComponent,
		PastorEditComponent,
		PopularSemonSectionComponent,
		ContactFormSectionComponent,
		ContactInfoSectionComponent,
		HomeSliderComponent,
    HomeComponent,
		IntroComponent,
    CellgroupsSectionComponent,
    CellgroupEditComponent,
		BlogComponent,
		BlogSidebarComponent,
		ContactFormSectionComponent,
		ContactInfoSectionComponent,
    EntityEditComponent,
    StorySectionComponent,
    StoryEditComponent,
	],
	exports: [
    HomeSliderComponent,
    HomeComponent,
		IntroComponent,
		BlogComponent,
		BlogSidebarComponent,
		SermonComponent,
		NewsComponent,
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
