import style from './post.module.css';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons';
import PostArticle from './PostArticle';
import { faker } from '@faker-js/faker';
import PostImages from './PostImages';

dayjs.locale('ko');
dayjs.extend(relativeTime);

type Props = {
  noImage?: boolean;
};

export default function Post({ noImage }: Props) {
  const target = {
    postId: 1,
    User: {
      id: 'yrk7723',
      nickname: '김옐둥',
      image: '/yRsRRjGO.jpg',
    },
    content: '나는야 김옐둥',
    createdAt: new Date(),
    Images: [] as any[],
  };

  if (Math.random() > 0.5 && !noImage) {
    target.Images.push(
      {
        imageId: 1,
        link: faker.image.urlLoremFlickr(),
      },
      {
        imageId: 2,
        link: faker.image.urlLoremFlickr(),
      },
      {
        imageId: 3,
        link: faker.image.urlLoremFlickr(),
      },
      {
        imageId: 4,
        link: faker.image.urlLoremFlickr(),
      }
    );
  }
  return (
    /**
     * article을 눌렀을때 게시글 상세 페이지(status)로 이동해야 하는데 이 article 하나 바꾸자고 서버 컴포넌트 였던거를 바꾸기 아까움
     * 이럴때는 article을 과감하게 컴포넌트로 분리
     *
     * 전부 다 클라이언트 컴포넌트로 바꾸는게 별로라면 일부분만 분리해서 클라이언트 컴포넌트로 변경하고
     * 서버 컴포넌트 부분을 children이나 props로 보내야 한다. -> 이게 클라이언트 컴포넌트와 서버 컴포넌트를 같이 쓰는 방법! 임포트 X
     * 만약 서버 컴포넌트를 클라이언트 컴포넌트에서 임포트하게 되면 서버 컴포넌트가 클라이언트 컴포넌트로 변경됨
     */
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          <div>{target.content}</div>
          <div>
            <PostImages post={target} />
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
