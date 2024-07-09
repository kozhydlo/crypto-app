import { Table } from 'antd';
import { useCrypto } from '../context/crypto-context';
import { saveCryptoAssets } from '../data'; // Додано для збереження у Local Storage

const columns = [
  {
    title: 'Імя',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Ціна, $',
    dataIndex: 'price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Сума',
    dataIndex: 'amount',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.amount - b.amount,
  },
];

export default function AssetsTable() {
  const { assets } = useCrypto();

  const data = assets.map((a) => ({
    key: a.id,
    name: a.name,
    price: a.price,
    amount: a.amount,
  }));

  saveCryptoAssets(assets); // Зберігаємо активи у Local Storage при кожному рендері

  return <Table pagination={false} columns={columns} dataSource={data} />;
}

