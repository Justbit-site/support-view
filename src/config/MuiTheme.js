import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple100, purple500, purple700} from 'material-ui/styles/colors';

export default class MuiTheme{
  getMuiTheme(){
    return getMuiTheme(
      {
        palette: {
          primary1Color: purple500,
          primary2Color: purple700,
          primary3Color: purple100
        },
      }, {
        avatar: {
          borderColor: null
        }
      }
    );
  }
}
