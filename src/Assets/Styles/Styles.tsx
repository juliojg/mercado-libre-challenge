import { makeStyles } from '@material-ui/core/styles'
import { createStyles } from '@material-ui/core'

const searchStyles = makeStyles((theme) => createStyles({
  containerClass: {
    backgroundColor: '#fee600'
  },
  inputSearch: {
    width: '700px',
    display: 'inline-block',
    padding: '10px 15px',
    fontSize: '20px',
    borderRadius: 0,
    border: '1px solid transparent'
  },

  inputButton: {
    display: 'inline-block',
    padding: '10px 15px',
    fontSize: '20px',
    borderRadius: 0,
    border: '1px solid transparent'
  },

  displaySearchBar: {
    display: 'inline-flex',
    paddingLeft: '10vh',
    alignItems: 'center'
  },

  productContainer: {
    display: 'flex',
    paddingTop: '20px'
  },

  productThumbnail: {
    maxHeight: '150px',
    maxWidth: '150px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  thumbnailSpace: {
    height: '150px',
    width: '150px'
  },

  productDataBox: {
    paddingLeft: '20px'
  },

  shippingIcon: {
    paddingLeft: '10px'
  }
}))

export default searchStyles;