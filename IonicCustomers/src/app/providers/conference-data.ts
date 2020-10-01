import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class ConferenceData {
  data: any;

  constructor(public http: HttpClient, public user: UserData) {}

  load(): any {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http
        .get('http://lacentro.my-domain.com:8080/inventary/product_list?format=json')
        .pipe(map(this.processData, this));
    }
  }

  processData(data: any) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.data = data;
    console.log('Datos  ' + JSON.stringify(data));

    // loop through each day in the schedule
    this.data.forEach((category: any) => {
      console.log('Datos' + JSON.stringify(category['name']));
      // loop through each timeline group in the day
      category.products.forEach((product: any) => {
        // loop through each session in the timeline group
        console.log('Datos' + JSON.stringify(product['name']));
        
      });
    });

    return this.data;

  }

  getTimeline(
    dayIndex: number,
    queryText = '',
    excludeTracks: any[] = [],
    segment = 'all'
  ) {
    return this.load().pipe(
      map((data: any) => {
        data.forEach((category: any) => {
        const day = category;
        

        queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
        const queryWords = queryText.split(' ').filter(w => !!w.trim().length);

        day.products.forEach((products: any) => {
          products.hide = true;
          console.log('LLegamos')

        //  products.sessions.forEach((session: any) => {
            // check if this session should show or not
            this.filterSession(products, queryWords, excludeTracks, segment);

            if (!products.hide) {
              // if this session is not hidden then this group should show
              products.hide = false;
              day.shownSessions++;
            }
          //});
        });
      });
      console.log('End')
        return data;
      })
    );
  }

  filterSession(
    session: any,
    queryWords: string[],
    excludeTracks: any[],
    segment: string
  ) {
    let matchesQueryText = false;
    if (queryWords.length) {
      // of any query word is in the session name than it passes the query test
      queryWords.forEach((queryWord: string) => {
        if (session.name.toLowerCase().indexOf(queryWord) > -1) {
          matchesQueryText = true;
        }
      });
    } else {
      // if there are no query words then this session passes the query test
      matchesQueryText = true;
    }

    // if any of the sessions tracks are not in the
    // exclude tracks then this session passes the track test
    let matchesTracks = false;

      if (excludeTracks.indexOf(name) === -1) {
        matchesTracks = true;
      }
    

    // if the segment is 'favorites', but session is not a user favorite
    // then this session does not pass the segment test
    let matchesSegment = false;
    if (segment === 'favorites') {
      if (this.user.hasFavorite(session.name)) {
        matchesSegment = true;
      }
    } else {
      matchesSegment = true;
    }

    // all tests must be true if it should not be hidden
    session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
  }

  getSpeakers() {
    return this.load().pipe(
      map((data: any) => {

        data.forEach((category: string) =>{
          console.log(category);
        });

        return  data.forEach((category: any) =>{
          const aName = category.name.split(' ').pop();
          const bName = category.name.split(' ').pop();
          return aName.localeCompare(bName);
        });
      })
    );
  }

  getTracks() {
    return this.load().pipe(
      map((data: any) => {
        return data.tracks.sort();
      })
    );
  }

  getMap() {
    return this.load().pipe(
      map((data: any) => {
        return data.map;
      })
    );
  }
}
