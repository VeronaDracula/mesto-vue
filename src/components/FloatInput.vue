<script setup>

import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    modelValue: { type: String, default: '' },
    errorText: { type: String, default: '' },
    inputId: { type: String, default: '' },
    labelText: { type: String, default: '' },
    autocomplete: { default: '' },
    name: { type: String, default: '' },

});

const emit = defineEmits(['update:modelValue']);

const inputRef = ref(null);
const isActive = ref(false);
const isFocused = ref(false);

const hasError = computed(() => !!props.errorText);

const showCleanBtn = computed(() => {
    return props.modelValue !== '' && isFocused.value;
});

function onFocus() {
    isActive.value = true;
    isFocused.value = true;
}

function onBlur() {
    isActive.value = false;
    isFocused.value = false;
}

function onInput(evt) {
    emit('update:modelValue', evt.target.value);
}

function clearInput() {
    emit('update:modelValue', '');
    inputRef.value?.focus();
}

// Аналог document.addEventListener('click', ...) из оригинала —
// скрывает кнопку очистки при клике вне поля (если нет ошибки)
function onDocumentClick(evt) {
    const target = evt.target;
    if (
        target !== inputRef.value &&
        !hasError.value
    ) {
        isFocused.value = false;
    }
}

onMounted(() => {
    document.addEventListener('click', onDocumentClick);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', onDocumentClick);
});
</script>

<template>
    <div class="input-float" :class="{
        active: isActive,
        filled: modelValue !== '',
        error: hasError
    }">
        <input class="input-float__input" ref="inputRef" :value="modelValue" @input="onInput" @focus="onFocus"
            @blur="onBlur" type="text" :name="name" :id="inputId" required :autocomplete="autocomplete"></input>
        <label class="input-float__label" :for="inputId">{{ labelText }}</label>
        <span class="input-float__error" :class="{ active: hasError }" role="alert" :aria-label="errorText"
            v-if="hasError">
            {{ errorText }}
        </span>
        <button class="input-float__btn-clean" type="button" aria-label="Очистить поле"
            :class="{ active: showCleanBtn }" @mousedown.prevent="clearInput">

        </button>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.input-float {
    position: relative;
    box-sizing: border-box;
    width: 100%;

    &.active {
        .input-float__label {
            font-size: 12px;
            top: 8px;
            color: $blue;
            transition: all 0.1s linear;
        }

        .input-float__input {
            padding-bottom: 8px;
            border: 1px solid $blue;
            outline: 1px solid $blue;

            &::placeholder {
                display: block;
                opacity: 1;
            }
        }
    }

    &.filled {
        .input-float__label {
            font-size: 12px;
            top: 8px;
            color: $muted;
        }
    }

    &.error {
        &:first-child {
            margin-top: 0;
        }

        .input-float__error {
            display: block;
        }

        .input-float__input {
            border: 1px solid $red !important;
            color: $dark-base;

            &:focus {
                outline: 1px solid $red !important;
            }
        }

        .input-float__label {
            color: $red;
        }
    }

    &.mobile-inactive {
        .input-float__btn-clean {
            display: none;

            &.active {
                display: none;
            }
        }
    }
}

.input-float__input {
    font-size: 16px;
    box-sizing: border-box;
    width: 100%;
    height: 3.5rem;
    padding: 25px 50px 8px 16px;
    border: 1px solid $gray-30;
    border-radius: 4px;

    color: $dark-base;

    background-color: $white;

    &::placeholder {
        display: none;
        color: $gray-30;
        opacity: 0;
    }

    &:not(:focus) {
        &::placeholder {
            display: none;
        }
    }

    &:focus {
        outline: none;
    }
}

.input-float__label {
    font-size: 16px;
    position: absolute;
    top: 17px;
    left: 16px;

    overflow: hidden;

    width: calc(100% - 36px);

    color: $gray-middle;
    text-overflow: ellipsis;
    white-space: nowrap;

    transition: all 0.1s linear;
}

.input-float__error {
    font-size: 12px;
    display: none;
    margin-top: 8px;
    color: $red;
}

.input-float__btn-clean {
    position: absolute;
    z-index: 2;
    top: 8px;
    right: 4px;
    display: none;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    width: 40px;
    height: 40px;
    padding: 0;
    border: none;

    color: $gray-middle;

    background: transparent center no-repeat url("../assets/images/icon_close_16.svg");
    background-size: 16px 16px;

    &.active {
        display: flex;
    }

    &:hover {
        cursor: pointer;
    }

}
</style>