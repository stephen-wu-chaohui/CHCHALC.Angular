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
// import { HomeComponent } from '../app.layout/home/home.component';
// import { ContactMapComponent } from '../app.layout/contact-map/contact-map.component';

@NgModule({
  imports: [
		CommonModule,
		NguCarouselModule,
		AppCommonModule
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
		PastorsSliderComponent,
		PopularSemonSectionComponent,
		ContactFormSectionComponent,
		ContactInfoSectionComponent,
		HomeSliderComponent,
		IntroComponent,
		CellgroupsSectionComponent,
		BlogComponent,
		BlogSidebarComponent,
		ContactFormSectionComponent,
		ContactInfoSectionComponent,
	],
	exports: [
		HomeSliderComponent,
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
		PopularSemonSectionComponent,
		ContactFormSectionComponent,
		ContactInfoSectionComponent,
		CellgroupsSectionComponent,
	]
})
export class PagesCommonModule { }
