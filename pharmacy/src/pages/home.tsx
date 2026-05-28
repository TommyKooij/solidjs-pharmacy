import { A } from '@solidjs/router';
import Card from '../components/Card';

export default function Home() {
  return (
    <section class="bg-gray-100 text-gray-700 p-8">
      <div class="grid grid-cols-4 gap-10 my-4">
        {/* <Card>
          <img
            src=""
            alt="Image"
          />
          <h2 class="my-2 text-2xl font-bold text-left">Title</h2>
          <p class="text-gray-500 text-left">Description</p>
          <div class="pt-4 flex justify-between items-center">
            <span class="text-lg font-semibold text-green-500">€0.00</span>
            <A
              href="/product/:id"
              class="p-2 text-sm text-white bg-green-500 rounded-lg"
            >
              View Product
            </A>
          </div>
        </Card> */}
      </div>
    </section>
  );
}
