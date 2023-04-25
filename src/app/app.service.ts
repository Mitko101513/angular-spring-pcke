import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private httpClient: HttpClient) {
  }
  hello(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8').set('Authorization', 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJYamN3VG1kTXBfTEVhTFktUXJUYi1jcUdsQjFoUVpLQ0dnbkx5VWQ1ckU0In0.eyJleHAiOjE2ODI0Mjc0NzEsImlhdCI6MTY4MjQyNzE3MSwiYXV0aF90aW1lIjoxNjgyNDI2ODM1LCJqdGkiOiJjZDdmOWIzMi0xY2NjLTRiMTctOGY3My0wNWI3MDA3ODMxMjQiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODEvcmVhbG1zL1NwcmluZ0siLCJhdWQiOlsic3ByaW5nLWNsaWVudCIsImFjY291bnQiXSwic3ViIjoiMzkyMjgxMGMtYTkzZi00MjViLTgyMjAtZDE0YzYzMzYyMWQ2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic3ByaW5nLXBrY2UtY2xpZW50Iiwibm9uY2UiOiJPVUZEWDNCR1UzcENXR28yYkhWRExtbHJjVWh4TkVsYUxsUjVNbVpGVURaTlYySm1WRWxwVjBGUk1VdEUiLCJzZXNzaW9uX3N0YXRlIjoiZTI0NDNhNTgtMmY3My00MTA2LWFhODEtOWNiZTFhZTU4OTQ4IiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLXNwcmluZ2siLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiYXBwX3N1cGVydmlzb3IiXX0sInJlc291cmNlX2FjY2VzcyI6eyJzcHJpbmctY2xpZW50Ijp7InJvbGVzIjpbInN1cGVydmlzb3IiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIHByb2ZpbGUgZW1haWwiLCJzaWQiOiJlMjQ0M2E1OC0yZjczLTQxMDYtYWE4MS05Y2JlMWFlNTg5NDgiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6Ik1pdGtvIFNwYXNvdiIsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIxIiwiZ2l2ZW5fbmFtZSI6Ik1pdGtvIiwiZmFtaWx5X25hbWUiOiJTcGFzb3YifQ.KbytDxUWiKbvKC3C8Fg39DF17Wt1R2LRTEDRybKEUap9WCnq--rmR9_uYK6i3V4-MW5E04HQ4curVWUSjHO-KFfDoyRO60YYlRzaSQNnlGeWMLUe38S3CYr9AZX1O7__2WecBRSuolz983UT4lCoVyp9agvmlD2CXrGtwJJXJoakivg1aK4UVtahsvCUNZHg1KEtjxmLWW5tgy5lOuxEMivIxAazKxrczoLtY-7vKOgnY-eyahpuF-mqvISC5XNeWcb9cSaW-qtSQ9uf7x9HGht2Rd7DzU6ExwkrkHQdYvsxCh5s7P_x3VhVp9dwYO5iid_Ui212_cX4egUrLk7DYw');
    return this.httpClient.get("http://localhost:8080/api/test/anonymous",
      {headers, responseType: 'text'});
  }
}
