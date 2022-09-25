<?php foreach ($response as $v) : ?>
    <li class="g-col-5-sm g-col-4-md g-col-3-lg g-col-2-xl t-center p-3 flex f-column scale-sm-H transition-all duration-2 rounded-2-H ease-in mb-7 mb-0-sm">

        <div class="h-50 mb-3 f-col-6">
            <img class="fluid-img d-block obj-cover" src="<?= $v['poster'] ?>" alt="<?= $v['title'] ?>">
        </div>

        <h2 class="white px-5 py-5 lato">
            <?= strtoupper($v['title']); ?>
        </h2>

        <h4 class="gray-5 pb-1 lato">
            <?= $v['author'] ?>
        </h4>

        <p class="gray-5 lato">
            <?= $v['year'] ?>
        </p>
    </li>
<?php endforeach; ?>