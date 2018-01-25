import { MainnavComponent } from '../components/partials/mainnav/mainnav.component';


export function AuthenticatedView(content) {
  return {
    'mainnav': MainnavComponent,
    'content': content
  }
}


export function PublicView(content) {
  return {
    'mainnav': '',
    'content': content
  }
}