import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🔧 Terintegrasi dan Mudah Digunakan',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Website dokumentasi ini dirancang agar memudahkan pengguna dalam mengakses 
        informasi seputar aplikasi yang dikembangkan dan digunakan di lingkungan 
        Poltekkes Kemenkes Semarang. Semua informasi dikemas secara rapi, terstruktur, 
        dan dapat diakses dengan cepat.
      </>
    ),
  },
  {
    title: '📚 Fokus pada Dokumentasi Aplikasi',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Kami memahami pentingnya dokumentasi yang jelas dan ringkas. 
        Website ini membantu dosen, tenaga kependidikan, maupun tim teknis untuk 
        memahami cara kerja, alur penggunaan, dan solusi dari setiap aplikasi 
        internal yang tersedia.
      </>
    ),
  },
  {
    title: '⚛️ Dibangun dengan Teknologi Modern',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Dibangun menggunakan React dan Docusaurus, situs ini mudah diperbarui dan diperluas. 
        Dengan sistem dokumentasi yang modular, kami bisa dengan cepat menambahkan panduan 
        dan dokumentasi baru untuk aplikasi-aplikasi mendatang.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
