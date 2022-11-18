import * as React from 'react'
import { FlatList } from '~@components/basic/FlatList'
import { Text } from '~@components/primitives/Text'

const rando = () => Math.round(Math.random() * 100)

const generateMassiveList = (length: number) => {
  return [
    ...Array(length)
      .fill(0)
      .map(() => ({ id: Math.random(), title: rando() })),
  ]
}

export default {
  title: 'FlatList',
  component: FlatList,
}

const Item = ({ title }) => <Text>{title}</Text>

export const NormalFlatList = () => (
  <FlatList
    data={generateMassiveList(10000)}
    renderItem={({ item }) => <Item title={item.title} />}
    keyExtractor={(item) => item.id}
  />
)

export const FlashList = () => (
  <FlatList
    data={generateMassiveList(10000)}
    renderItem={({ item }) => <Item title={item.title} />}
    keyExtractor={(item) => item.id}
    flashlist
    estimatedItemSize={1000}
  />
)
