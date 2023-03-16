import DiscussionsData from '@/lib/static/localdb-discussions.json';
import { useRef } from 'react';

interface DiscussionsWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function DiscussionsWrapper(
  htmlAttributes: DiscussionsWrapperProps,
) {
  const Discussions = useRef(DiscussionsData);
  return (
    <section
      className={`my-8` + ' ' + htmlAttributes?.className}
      {...htmlAttributes}>
      <table className="discussion-element-table w-full mx-auto max-xl:w-[920px] max-lg:w-[740px] max-md:w-[600px] max-sm:w-[420px]">
        <thead className="discussion-element-table-header">
          <tr className="discussion-element-table-header-row">
            {['Topic', 'Replies', 'Views', 'Activity']?.map(
              (heading: string, headingIndex: number) => (
                <th
                  className={`discussion-element-table-header__table-heading py-4 ${
                    heading === 'Topic' ? 'text-left' : 'text-right'
                  } ${heading === 'Activity' && 'max-sm:hidden'}`}
                  scope="row"
                  key={headingIndex}>
                  <span className="discussion-element-table-header__heading-content-wrapper font-semibold text-gray-500">
                    {heading}
                  </span>
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody className="table-body">
          {Discussions?.current?.map(
            (discussionElement, discussionElementIndex) => (
              <DiscussionElement
                element={discussionElement}
                key={discussionElementIndex}
              />
            ),
          )}
        </tbody>
      </table>
    </section>
  );
}

interface DiscussionElementProps extends React.HTMLAttributes<HTMLDivElement> {
  element: any;
}

export function DiscussionElement({
  element,
  ...htmlAttributes
}: DiscussionElementProps) {
  return (
    <tr
      className={`bg-white cursor-pointer` + ' ' + htmlAttributes?.className}
      {...htmlAttributes}>
      <td className="table-content__topic-content-wrapper pb-6">
        <h3 className="leading-snug text-pink-500 font-semibold text-base hover:underline">
          {element?.discussionTitle}
        </h3>
        <span className="discussion-author-details-content-wrapper text-sm font-normal text-gray-400 hover:underline">
          {'published by, ' +
            element?.discussionAuthor?.authorUsername +
            ' (' +
            element?.discussionAuthor?.authorFullName?.firstName +
            ' ' +
            element?.discussionAuthor?.authorFullName?.lastName +
            ')'}
        </span>
      </td>
      <td className="table-content__replies-content-wrapper text-right">
        <h3 className="leading-snug text-gray-900 font-semibold text-base">
          {element?.discussionDetails?.replies?.length}
        </h3>
      </td>
      <td className="table-content__views-count-content-wrapper text-right">
        <h3 className="leading-snug text-gray-900 font-semibold text-base">
          {element?.discussionDetails?.views}
        </h3>
      </td>
      <td className="table-content__latest-activity-content-wrapper text-right max-sm:hidden">
        <h3 className="leading-snug text-gray-900 font-semibold text-base">
          {element?.discussionDetails?.lastReplyAt?.month +
            "'" +
            element?.discussionDetails?.lastReplyAt?.year}
        </h3>
      </td>
    </tr>
  );
}
