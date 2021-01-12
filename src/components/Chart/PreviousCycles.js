import React from "react";

function Chart({
  children,
  title,
  data = { duration: 0, secondsUntilNextCycle: 0, targetBlock: 0 },
}) {
  let division = (data.secondsUntilNextCycle + data.duration) / 6;
  if (isNaN(division)) {
    division = 0;
  }
  return (
    <div
      className="flex-col items-center justify-center"
      style={{ width: `116px` }}
    >
      {/* /* -------------------------------------------------------------------------- */
      /*                                   Cycle 1                                  */
      /* -------------------------------------------------------------------------- */}
      <div className="mb-3">
        <svg
          className="pr-1 mx-auto"
          width="77"
          height="80"
          viewBox="0 0 77 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39 72C56.6731 72 71 57.6731 71 40C71 22.3269 56.6731 8 39 8C21.3269 8 7 22.3269 7 40C7 57.6731 21.3269 72 39 72Z"
            fill="#2F80ED"
          />
          <path
            d="M39 4C40.1046 4 41 3.10457 41 2C41 0.895431 40.1046 0 39 0C37.8954 0 37 0.895431 37 2C37 3.10457 37.8954 4 39 4Z"
            fill="#2F80ED"
          />
          <path
            d="M23 7C24.1046 7 25 6.10457 25 5C25 3.89543 24.1046 3 23 3C21.8954 3 21 3.89543 21 5C21 6.10457 21.8954 7 23 7Z"
            fill="#2F80ED"
          />
          <path
            d="M9 18C10.1046 18 11 17.1046 11 16C11 14.8954 10.1046 14 9 14C7.89543 14 7 14.8954 7 16C7 17.1046 7.89543 18 9 18Z"
            fill="#2F80ED"
          />
          <path
            d="M2 34C3.10457 34 4 33.1046 4 32C4 30.8954 3.10457 30 2 30C0.895431 30 0 30.8954 0 32C0 33.1046 0.895431 34 2 34Z"
            fill="#2F80ED"
          />
          <path
            d="M2 50C3.10457 50 4 49.1046 4 48C4 46.8954 3.10457 46 2 46C0.895431 46 0 46.8954 0 48C0 49.1046 0.895431 50 2 50Z"
            fill="#2F80ED"
          />
          <path
            d="M9 66C10.1046 66 11 65.1046 11 64C11 62.8954 10.1046 62 9 62C7.89543 62 7 62.8954 7 64C7 65.1046 7.89543 66 9 66Z"
            fill="#2F80ED"
          />
          <path
            d="M23 75C24.1046 75 25 74.1046 25 73C25 71.8954 24.1046 71 23 71C21.8954 71 21 71.8954 21 73C21 74.1046 21.8954 75 23 75Z"
            fill="#2F80ED"
          />
          <path
            d="M39 80C40.1046 80 41 79.1046 41 78C41 76.8954 40.1046 76 39 76C37.8954 76 37 76.8954 37 78C37 79.1046 37.8954 80 39 80Z"
            fill="#2F80ED"
          />
          <path
            d="M55 75C56.1046 75 57 74.1046 57 73C57 71.8954 56.1046 71 55 71C53.8954 71 53 71.8954 53 73C53 74.1046 53.8954 75 55 75Z"
            fill="#2F80ED"
          />
          <path
            d="M69 66C70.1046 66 71 65.1046 71 64C71 62.8954 70.1046 62 69 62C67.8954 62 67 62.8954 67 64C67 65.1046 67.8954 66 69 66Z"
            fill="#2F80ED"
          />
          <path
            d="M75 50C76.1046 50 77 49.1046 77 48C77 46.8954 76.1046 46 75 46C73.8954 46 73 46.8954 73 48C73 49.1046 73.8954 50 75 50Z"
            fill="#2F80ED"
          />
          <path
            d="M75 34C76.1046 34 77 33.1046 77 32C77 30.8954 76.1046 30 75 30C73.8954 30 73 30.8954 73 32C73 33.1046 73.8954 34 75 34Z"
            fill="#2F80ED"
          />
          <path
            d="M69 18C70.1046 18 71 17.1046 71 16C71 14.8954 70.1046 14 69 14C67.8954 14 67 14.8954 67 16C67 17.1046 67.8954 18 69 18Z"
            fill="#2F80ED"
          />
          <path
            d="M55 7C56.1046 7 57 6.10457 57 5C57 3.89543 56.1046 3 55 3C53.8954 3 53 3.89543 53 5C53 6.10457 53.8954 7 55 7Z"
            fill="#2F80ED"
          />
          <text x="25" y="45" fill="white" class="small">
            {data.targetBlock}
          </text>
        </svg>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-end -mb-1">
            <svg
              width="26"
              height="8"
              viewBox="0 0 26 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4"
                y1="4"
                x2="26"
                y2="4"
                stroke="#184258"
                stroke-width="2"
              />
              <line
                x1="22"
                y1="4"
                x2="26"
                y2="4"
                stroke="#2F80ED"
                stroke-width="2"
              />
              <circle cx="4" cy="4" r="4" fill="#2F80ED" />
            </svg>
            <div
              className="ml-2 text-sm text-center text-gray-300"
              style={{ width: `28px` }}
            >
              {division * 6}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-start -mb-1">
            <div
              className="mr-2 text-sm text-center text-gray-300"
              style={{ width: `28px` }}
            >
              {division * 5}
            </div>
            <svg
              width="26"
              height="8"
              viewBox="0 0 26 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="4" x2="22" y2="4" stroke="#184258" stroke-width="2" />
              <line y1="4" x2="4" y2="4" stroke="#2F80ED" stroke-width="2" />
              <circle cx="22" cy="4" r="4" fill="#2F80ED" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-end -mb-1">
            <svg
              width="26"
              height="8"
              viewBox="0 0 26 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4"
                y1="4"
                x2="26"
                y2="4"
                stroke="#184258"
                stroke-width="2"
              />
              <line
                x1="22"
                y1="4"
                x2="26"
                y2="4"
                stroke="#2F80ED"
                stroke-width="2"
              />
              <circle cx="4" cy="4" r="4" fill="#2F80ED" />
            </svg>
            <div
              className="ml-2 text-sm text-center text-gray-300"
              style={{ width: `28px` }}
            >
              {division * 4}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-start -mb-1">
            <div
              className="mr-2 text-sm text-center text-gray-300"
              style={{ width: `28px` }}
            >
              {division * 3}
            </div>
            <svg
              width="26"
              height="8"
              viewBox="0 0 26 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="4" x2="22" y2="4" stroke="#184258" stroke-width="2" />
              <line y1="4" x2="4" y2="4" stroke="#2F80ED" stroke-width="2" />
              <circle cx="22" cy="4" r="4" fill="#2F80ED" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex items-center justify-end -mb-1">
            <svg
              width="26"
              height="8"
              viewBox="0 0 26 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4"
                y1="4"
                x2="26"
                y2="4"
                stroke="#184258"
                stroke-width="2"
              />
              <line
                x1="22"
                y1="4"
                x2="26"
                y2="4"
                stroke="#2F80ED"
                stroke-width="2"
              />
              <circle cx="4" cy="4" r="4" fill="#2F80ED" />
            </svg>
            <div
              className="ml-2 text-sm text-center text-gray-300"
              style={{ width: `28px` }}
            >
              {division * 2}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-start -mb-1">
            <div
              className="mr-2 text-sm text-center text-gray-300"
              style={{ width: `28px` }}
            >
              {division * 1}
            </div>
            <svg
              width="26"
              height="8"
              viewBox="0 0 26 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="4" x2="22" y2="4" stroke="#184258" stroke-width="2" />
              <line y1="4" x2="4" y2="4" stroke="#2F80ED" stroke-width="2" />
              <circle cx="22" cy="4" r="4" fill="#2F80ED" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <svg
          className="pr-1 mx-auto"
          width="77"
          height="80"
          viewBox="0 0 77 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39 72C56.6731 72 71 57.6731 71 40C71 22.3269 56.6731 8 39 8C21.3269 8 7 22.3269 7 40C7 57.6731 21.3269 72 39 72Z"
            fill="#84A4B5"
          />
          <path
            d="M39 4C40.1046 4 41 3.10457 41 2C41 0.895431 40.1046 0 39 0C37.8954 0 37 0.895431 37 2C37 3.10457 37.8954 4 39 4Z"
            fill="#84A4B5"
          />
          <path
            d="M23 7C24.1046 7 25 6.10457 25 5C25 3.89543 24.1046 3 23 3C21.8954 3 21 3.89543 21 5C21 6.10457 21.8954 7 23 7Z"
            fill="#84A4B5"
          />
          <path
            d="M9 18C10.1046 18 11 17.1046 11 16C11 14.8954 10.1046 14 9 14C7.89543 14 7 14.8954 7 16C7 17.1046 7.89543 18 9 18Z"
            fill="#84A4B5"
          />
          <path
            d="M2 34C3.10457 34 4 33.1046 4 32C4 30.8954 3.10457 30 2 30C0.895431 30 0 30.8954 0 32C0 33.1046 0.895431 34 2 34Z"
            fill="#84A4B5"
          />
          <path
            d="M2 50C3.10457 50 4 49.1046 4 48C4 46.8954 3.10457 46 2 46C0.895431 46 0 46.8954 0 48C0 49.1046 0.895431 50 2 50Z"
            fill="#84A4B5"
          />
          <path
            d="M9 66C10.1046 66 11 65.1046 11 64C11 62.8954 10.1046 62 9 62C7.89543 62 7 62.8954 7 64C7 65.1046 7.89543 66 9 66Z"
            fill="#84A4B5"
          />
          <path
            d="M23 75C24.1046 75 25 74.1046 25 73C25 71.8954 24.1046 71 23 71C21.8954 71 21 71.8954 21 73C21 74.1046 21.8954 75 23 75Z"
            fill="#84A4B5"
          />
          <path
            d="M39 80C40.1046 80 41 79.1046 41 78C41 76.8954 40.1046 76 39 76C37.8954 76 37 76.8954 37 78C37 79.1046 37.8954 80 39 80Z"
            fill="#84A4B5"
          />
          <path
            d="M55 75C56.1046 75 57 74.1046 57 73C57 71.8954 56.1046 71 55 71C53.8954 71 53 71.8954 53 73C53 74.1046 53.8954 75 55 75Z"
            fill="#84A4B5"
          />
          <path
            d="M69 66C70.1046 66 71 65.1046 71 64C71 62.8954 70.1046 62 69 62C67.8954 62 67 62.8954 67 64C67 65.1046 67.8954 66 69 66Z"
            fill="#84A4B5"
          />
          <path
            d="M75 50C76.1046 50 77 49.1046 77 48C77 46.8954 76.1046 46 75 46C73.8954 46 73 46.8954 73 48C73 49.1046 73.8954 50 75 50Z"
            fill="#84A4B5"
          />
          <path
            d="M75 34C76.1046 34 77 33.1046 77 32C77 30.8954 76.1046 30 75 30C73.8954 30 73 30.8954 73 32C73 33.1046 73.8954 34 75 34Z"
            fill="#84A4B5"
          />
          <path
            d="M69 18C70.1046 18 71 17.1046 71 16C71 14.8954 70.1046 14 69 14C67.8954 14 67 14.8954 67 16C67 17.1046 67.8954 18 69 18Z"
            fill="#84A4B5"
          />
          <path
            d="M55 7C56.1046 7 57 6.10457 57 5C57 3.89543 56.1046 3 55 3C53.8954 3 53 3.89543 53 5C53 6.10457 53.8954 7 55 7Z"
            fill="#84A4B5"
          />
          <text x="25" y="45" fill="white" class="small">
            {isNaN(data.targetBlock - 1) ? 0 : data.targetBlock - 1}
          </text>
        </svg>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-end -mb-1">
            <svg
              width="26"
              height="8"
              viewBox="0 0 26 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4"
                y1="4"
                x2="26"
                y2="4"
                stroke="#184258"
                stroke-width="2"
              />
              <line
                x1="22"
                y1="4"
                x2="26"
                y2="4"
                stroke="#84A4B5"
                stroke-width="2"
              />
              <circle cx="4" cy="4" r="4" fill="#84A4B5" />
            </svg>
            <div
              className="ml-2 text-sm text-center text-gray-300"
              style={{ width: `28px` }}
            >
              {division * 6}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-start -mb-1">
            <div
              className="mr-2 text-sm text-center text-gray-300"
              style={{ width: `28px` }}
            >
              {division * 5}
            </div>
            <svg
              width="26"
              height="8"
              viewBox="0 0 26 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="4" x2="22" y2="4" stroke="#184258" stroke-width="2" />
              <line y1="4" x2="4" y2="4" stroke="#84A4B5" stroke-width="2" />
              <circle cx="22" cy="4" r="4" fill="#84A4B5" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-end -mb-1">
            <svg
              width="26"
              height="8"
              viewBox="0 0 26 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4"
                y1="4"
                x2="26"
                y2="4"
                stroke="#184258"
                stroke-width="2"
              />
              <line
                x1="22"
                y1="4"
                x2="26"
                y2="4"
                stroke="#84A4B5"
                stroke-width="2"
              />
              <circle cx="4" cy="4" r="4" fill="#84A4B5" />
            </svg>
            <div
              className="ml-2 text-sm text-center text-gray-300"
              style={{ width: `28px` }}
            >
              {division * 4}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-start -mb-1">
            <div
              className="mr-2 text-sm text-center text-gray-300"
              style={{ width: `28px` }}
            >
              {division * 3}
            </div>
            <svg
              width="26"
              height="8"
              viewBox="0 0 26 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="4" x2="22" y2="4" stroke="#184258" stroke-width="2" />
              <line y1="4" x2="4" y2="4" stroke="#84A4B5" stroke-width="2" />
              <circle cx="22" cy="4" r="4" fill="#84A4B5" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex items-center justify-end -mb-1">
            <svg
              width="26"
              height="8"
              viewBox="0 0 26 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4"
                y1="4"
                x2="26"
                y2="4"
                stroke="#184258"
                stroke-width="2"
              />
              <line
                x1="22"
                y1="4"
                x2="26"
                y2="4"
                stroke="#84A4B5"
                stroke-width="2"
              />
              <circle cx="4" cy="4" r="4" fill="#84A4B5" />
            </svg>
            <div
              className="ml-2 text-sm text-center text-gray-300"
              style={{ width: `28px` }}
            >
              {division * 2}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-start -mb-1">
            <div
              className="mr-2 text-sm text-center text-gray-300"
              style={{ width: `28px` }}
            >
              {division * 1}
            </div>
            <svg
              width="26"
              height="8"
              viewBox="0 0 26 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="4" x2="22" y2="4" stroke="#184258" stroke-width="2" />
              <line y1="4" x2="4" y2="4" stroke="#84A4B5" stroke-width="2" />
              <circle cx="22" cy="4" r="4" fill="#84A4B5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <svg
          className="pr-1 mx-auto"
          width="77"
          height="80"
          viewBox="0 0 77 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39 72C56.6731 72 71 57.6731 71 40C71 22.3269 56.6731 8 39 8C21.3269 8 7 22.3269 7 40C7 57.6731 21.3269 72 39 72Z"
            fill="#84A4B5"
          />
          <path
            d="M39 4C40.1046 4 41 3.10457 41 2C41 0.895431 40.1046 0 39 0C37.8954 0 37 0.895431 37 2C37 3.10457 37.8954 4 39 4Z"
            fill="#84A4B5"
          />
          <path
            d="M23 7C24.1046 7 25 6.10457 25 5C25 3.89543 24.1046 3 23 3C21.8954 3 21 3.89543 21 5C21 6.10457 21.8954 7 23 7Z"
            fill="#84A4B5"
          />
          <path
            d="M9 18C10.1046 18 11 17.1046 11 16C11 14.8954 10.1046 14 9 14C7.89543 14 7 14.8954 7 16C7 17.1046 7.89543 18 9 18Z"
            fill="#84A4B5"
          />
          <path
            d="M2 34C3.10457 34 4 33.1046 4 32C4 30.8954 3.10457 30 2 30C0.895431 30 0 30.8954 0 32C0 33.1046 0.895431 34 2 34Z"
            fill="#84A4B5"
          />
          <path
            d="M2 50C3.10457 50 4 49.1046 4 48C4 46.8954 3.10457 46 2 46C0.895431 46 0 46.8954 0 48C0 49.1046 0.895431 50 2 50Z"
            fill="#84A4B5"
          />
          <path
            d="M9 66C10.1046 66 11 65.1046 11 64C11 62.8954 10.1046 62 9 62C7.89543 62 7 62.8954 7 64C7 65.1046 7.89543 66 9 66Z"
            fill="#84A4B5"
          />
          <path
            d="M23 75C24.1046 75 25 74.1046 25 73C25 71.8954 24.1046 71 23 71C21.8954 71 21 71.8954 21 73C21 74.1046 21.8954 75 23 75Z"
            fill="#84A4B5"
          />
          <path
            d="M39 80C40.1046 80 41 79.1046 41 78C41 76.8954 40.1046 76 39 76C37.8954 76 37 76.8954 37 78C37 79.1046 37.8954 80 39 80Z"
            fill="#84A4B5"
          />
          <path
            d="M55 75C56.1046 75 57 74.1046 57 73C57 71.8954 56.1046 71 55 71C53.8954 71 53 71.8954 53 73C53 74.1046 53.8954 75 55 75Z"
            fill="#84A4B5"
          />
          <path
            d="M69 66C70.1046 66 71 65.1046 71 64C71 62.8954 70.1046 62 69 62C67.8954 62 67 62.8954 67 64C67 65.1046 67.8954 66 69 66Z"
            fill="#84A4B5"
          />
          <path
            d="M75 50C76.1046 50 77 49.1046 77 48C77 46.8954 76.1046 46 75 46C73.8954 46 73 46.8954 73 48C73 49.1046 73.8954 50 75 50Z"
            fill="#84A4B5"
          />
          <path
            d="M75 34C76.1046 34 77 33.1046 77 32C77 30.8954 76.1046 30 75 30C73.8954 30 73 30.8954 73 32C73 33.1046 73.8954 34 75 34Z"
            fill="#84A4B5"
          />
          <path
            d="M69 18C70.1046 18 71 17.1046 71 16C71 14.8954 70.1046 14 69 14C67.8954 14 67 14.8954 67 16C67 17.1046 67.8954 18 69 18Z"
            fill="#84A4B5"
          />
          <path
            d="M55 7C56.1046 7 57 6.10457 57 5C57 3.89543 56.1046 3 55 3C53.8954 3 53 3.89543 53 5C53 6.10457 53.8954 7 55 7Z"
            fill="#84A4B5"
          />
          <text x="25" y="45" fill="white" class="small">
            {isNaN(data.targetBlock - 2) ? 0 : data.targetBlock - 2}
          </text>
        </svg>
      </div>
    </div>
  );
}

export default Chart;
