interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description?: string;
  details?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 md:left-1/2 md:-translate-x-0.5"></div>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative flex items-start md:items-center"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-purple-600 dark:bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 z-10 flex items-center justify-center">
              <div className="w-2 h-2 bg-white dark:bg-gray-900 rounded-full"></div>
            </div>

            {/* Content */}
            <div
              className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'
              }`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className={`${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                    {item.organization}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {item.period}
                  </p>
                  {item.description && (
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {item.description}
                    </p>
                  )}
                  {item.details && item.details.length > 0 && (
                    <ul className={`space-y-1 text-sm text-gray-600 dark:text-gray-400 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          {index % 2 === 0 ? (
                            <>
                              <span className="md:order-2">•</span>
                              <span className="md:order-1">{detail}</span>
                            </>
                          ) : (
                            <>
                              <span>•</span>
                              <span>{detail}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

