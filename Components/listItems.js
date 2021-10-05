import React, { Component } from 'react'
import { SimpleList } from 'packlist-components/native';

import {observer} from 'mobx-react'
import observableListStore from '../MOBX/listStore';

@observer
export default class ListItems extends Component {
  render () {
    return (
      <SimpleList
        value={[...observableListStore.allItems]}
      />
    )
  }
}