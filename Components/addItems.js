import React, { Component } from 'react'
import { AddPackingItem } from 'packlist-components/native'

import {observer} from 'mobx-react'
import observableListStore from '../MOBX/listStore'

@observer
export default class AddItems extends Component {
  render () {
    return (
      <AddPackingItem
        addItem={observableListStore.addItem}
        setNewItemText={observableListStore.setNewItemName}
        value={observableListStore.newItemName}
        clear={observableListStore.clear}
      />
    )
  }
}